const UserModel = require('../Models/UserModel');

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    // Check if the user exists
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Delete the user
    await UserModel.findByIdAndDelete(userId);
    res.json({ msg: 'User deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

module.exports = deleteUser;
