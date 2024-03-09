import React from 'react'
import { Card, CardBody, Avatar, Typography } from '@material-tailwind/react'

const coursecontent = () => {
  return (
    <>
        <Card className="mx-3 mt-8 mb-6 border border-blue-gray-100">
            <CardBody className="p-4">
            <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-6">
                <Avatar
                    src="/img/bruce-mars.jpeg"
                    alt="bruce-mars"
                    size="xl"
                    variant="rounded"
                    className="rounded-lg shadow-lg shadow-blue-gray-500/40"
                />
                <div>
                    <Typography variant="h5" color="blue-gray" className="mb-1">
                    Richard Davis
                    </Typography>
                    <Typography
                    variant="small"
                    className="font-normal text-blue-gray-600"
                    >
                    Student
                    </Typography>
                </div>
                </div>
            </div>
            <div className="px-4 pb-4">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                Courses
                </Typography>
                <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
                {coursesData.map(
                    ({ img, title, description }) => (
                    <Card key={title} color="transparent" shadow={false}>
                        <CardHeader
                        floated={false}
                        color="gray"
                        className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                        >
                        <img
                            src={img}
                            alt={title}
                            className="h-full w-full object-cover"
                        />
                        </CardHeader>
                        <CardBody className="py-0 px-1">
                        <Typography
                            variant="h5"
                            color="blue-gray"
                            className="mt-1 mb-2 hover:cursor-pointer hover:text-gray-600"
                            onClick={() => handleCourse(title)}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="small"
                            className="font-normal text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                        </CardBody>
                        <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                        </CardFooter>
                    </Card>
                    )
                )}
                </div>
            </div>
            </CardBody>
        </Card>
    </>
  )
}

export default coursecontent