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
import { PlusCircle, Pencil, Trash2, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

const dummyUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "teacher",
    status: "active",
    courses: ["Mathematics", "Physics"],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "student",
    status: "active",
    courses: ["Mathematics"],
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert@example.com",
    role: "teacher",
    status: "pending",
    courses: [],
  },
];

export default function TeacherPage() {
  const [users] = useState(dummyUsers);

  return (
    <DashboardShell role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">User Management</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New User
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Courses</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant={user.role === "teacher" ? "default" : "secondary"}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.courses.join(", ") || "None"}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {/* <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button> */}
                        {user.status === "pending" && (
                          <>
                            <Button variant="ghost" size="icon">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <XCircle className="h-4 w-4 text-red-500" />
                            </Button>
                          </>
                        )}
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