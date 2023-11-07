const { prisma } = require('../prisma/prisma-client');

const getAll = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();

    return res.status(200).json(employees);
  } catch (err) {
    return res.status(400).json({ message: 'не удалось получить список сотрудников' });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    });

    return res.status(200).json(employee);
  } catch (err) {
    return res.status(400).json({ message: 'не удалось получить список сотрудника' });
  }
};

const addEmployee = async (req, res) => {
  try {
    const data = req.body;

    if (!data.firstName || !data.lastName || !data.address || !data.age) {
      return res.status(500).json({ message: 'Все поля обязательные' });
    }

    const employee = await prisma.employee.create({
      data: {
        ...data,
        userId: req.user.id,
      },
    });

    return res.status(201).json(employee);
  } catch (err) {
    return res.status(500).json({ message: 'Что-то пошло не так...' });
  }
};

const editEmployee = async (req, res) => {
  try {
    const data = req.body;
    const id = data.id;

    await prisma.employee.update({
      where: {
        id,
      },
      data,
    });

    return res.status(204).json('success');
  } catch (err) {
    return res.status(500).json({ message: 'не удалось отредактировать сотрудника' });
  }
};

const removeEmployee = async (req, res) => {
  try {
    const { id } = req.body;

    await prisma.employee.delete({
      where: {
        id,
      },
    });

    return res.status(204).json('success');
  } catch (err) {
    return res.status(400).json({ message: 'не удалось удалить сотрудника' });
  }
};

module.exports = {
  getAll,
  getEmployeeById,
  addEmployee,
  editEmployee,
  removeEmployee,
};
