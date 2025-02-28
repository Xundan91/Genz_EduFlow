"use client"

import { DashboardShell } from "@/components/ui/dashboard-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Pencil, Trash2, BookOpen } from "lucide-react";
import { useState } from "react";

const dummyCourses = [
  {
    id: 1,
    name: "Advanced Mathematics",
    category: "Mathematics",
    teacher: "John Doe",
    students: 45,
    status: "active",
    prerequisites: ["Basic Mathematics"],
  },
  {
    id: 2,
    name: "Physics 101",
    category: "Physics",
    teacher: "Jane Smith",
    students: 32,
    status: "active",
    prerequisites: [],
  },
  {
    id: 3,
    name: "Chemistry Basics",
    category: "Chemistry",
    teacher: "Robert Johnson",
    students: 28,
    status: "draft",
    prerequisites: ["Basic Science"],
  },
];

export default function CoursesPage() {
  const [courses] = useState(dummyCourses);

  return (
    <DashboardShell role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Course Management</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Course
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Teacher</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Prerequisites</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.name}</TableCell>
                    <TableCell>{course.category}</TableCell>
                    <TableCell>{course.teacher}</TableCell>
                    <TableCell>{course.students}</TableCell>
                    <TableCell>
                      <Badge variant={course.status === "active" ? "success" : "secondary"}>
                        {course.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{course.prerequisites.join(", ") || "None"}</TableCell>
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
      </div>
    </DashboardShell>
  );
}