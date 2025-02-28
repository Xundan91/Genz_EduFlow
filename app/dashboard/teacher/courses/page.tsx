"use client"

import { DashboardShell } from "@/components/ui/dashboard-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  PlusCircle, 
  Pencil, 
  Trash2, 
  BookOpen, 
  FileText, 
  Video,
  Upload,
  Clock
} from "lucide-react";
import { useState } from "react";

const dummyCourses = [
  {
    id: 1,
    name: "Advanced Mathematics",
    category: "Mathematics",
    students: 45,
    status: "active",
    modules: 8,
    lastUpdated: "2024-03-20",
  },
  {
    id: 2,
    name: "Physics 101",
    category: "Physics",
    students: 32,
    status: "active",
    modules: 6,
    lastUpdated: "2024-03-19",
  },
];

const dummyContent = [
  {
    id: 1,
    title: "Introduction to Calculus",
    type: "video",
    duration: "45 mins",
    status: "published",
  },
  {
    id: 2,
    title: "Week 1 Assignment",
    type: "assignment",
    deadline: "2024-03-25",
    status: "active",
  },
  {
    id: 3,
    title: "Derivatives PDF",
    type: "document",
    size: "2.4 MB",
    status: "published",
  },
];

export default function TeacherCoursesPage() {
  const [courses] = useState(dummyCourses);
  const [content] = useState(dummyContent);

  return (
    <DashboardShell role="teacher">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Course Management</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Course
          </Button>
        </div>

        <Tabs defaultValue="courses">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="content">Course Content</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Active Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Modules</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell className="font-medium">{course.name}</TableCell>
                        <TableCell>{course.category}</TableCell>
                        <TableCell>{course.students}</TableCell>
                        <TableCell>{course.modules}</TableCell>
                        <TableCell>
                          <Badge variant={course.status === "active" ? "success" : "secondary"}>
                            {course.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{course.lastUpdated}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon">
                              <BookOpen className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Course Content</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Video className="mr-2 h-4 w-4" />
                    Add Video
                  </Button>
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Add Assignment
                  </Button>
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload PDF
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Duration/Deadline</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {content.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {item.type === "video" && <Video className="mr-2 h-4 w-4 inline" />}
                            {item.type === "assignment" && <FileText className="mr-2 h-4 w-4 inline" />}
                            {item.type === "document" && <Upload className="mr-2 h-4 w-4 inline" />}
                            {item.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {item.duration || item.deadline || item.size}
                        </TableCell>
                        <TableCell>
                          <Badge variant={item.status === "published" ? "success" : "secondary"}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  );
}