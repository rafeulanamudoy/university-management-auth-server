import { Request, Response } from 'express'
import usersService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createrUser(user)
    res.status(200).json({
      success: true,
      message: 'users create successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      sucess: false,

      message: 'fai to create user',
    })
  }
}
export default {
  createUser,
}
