import type { NextApiRequest, NextApiResponse } from 'next'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
        setTimeout(function () {
            res.status(200).json({ id, name: `User ${id}` })
        },3000)


      // Get data from your database
    //   res.status(200).json({ id, name: `User ${id}` })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'PATCH', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
