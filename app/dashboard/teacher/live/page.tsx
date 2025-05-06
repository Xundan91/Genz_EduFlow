// "use client"

// import { DashboardShell } from "@/components/ui/dashboard-shell";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { 
//   Video,
//   Users,
//   Calendar,
//   PlusCircle,
//   Link as LinkIcon,
//   MessageSquare,
//   Settings,
//   Play
// } from "lucide-react";
// import { useState } from "react";

// const dummyClasses = [
//   {
//     id: 1,
//     title: "Advanced Calculus - Live Session",
//     course: "Advanced Mathematics",
//     date: "2024-03-25",
//     time: "10:00 AM",
//     duration: "60 mins",
//     students: 45,
//     status: "scheduled",
//   },
//   {
//     id: 2,
//     title: "Physics Lab Demo",
//     course: "Physics 101",
//     date: "2024-03-25",
//     time: "2:00 PM",
//     duration: "45 mins",
//     students: 32,
//     status: "scheduled",
//   },
//   {
//     id: 3,
//     title: "Q&A Session",
//     course: "Advanced Mathematics",
//     date: "2024-03-24",
//     time: "3:00 PM",
//     duration: "30 mins",
//     students: 28,
//     status: "completed",
//   },
// ];

// export default function TeacherLivePage() {
//   const [classes] = useState(dummyClasses);

//   return (
//     <DashboardShell role="teacher">
//       <div className="space-y-6">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Live Classes</h1>
//           <Button>
//             <PlusCircle className="mr-2 h-4 w-4" />
//             Schedule Class
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Upcoming Classes</CardTitle>
//               <Calendar className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">5</div>
//               <p className="text-xs text-muted-foreground">This week</p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Total Students</CardTitle>
//               <Users className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">105</div>
//               <p className="text-xs text-muted-foreground">Enrolled in live classes</p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Hours Taught</CardTitle>
//               <Video className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">24</div>
//               <p className="text-xs text-muted-foreground">This month</p>
//             </CardContent>
//           </Card>
//         </div>

//         <Card>
//           <CardHeader>
//             <CardTitle>Scheduled Classes</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Title</TableHead>
//                   <TableHead>Course</TableHead>
//                   <TableHead>Date & Time</TableHead>
//                   <TableHead>Duration</TableHead>
//                   <TableHead>Students</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {classes.map((class_) => (
//                   <TableRow key={class_.id}>
//                     <TableCell className="font-medium">{class_.title}</TableCell>
//                     <TableCell>{class_.course}</TableCell>
//                     <TableCell>
//                       {class_.date} at {class_.time}
//                     </TableCell>
//                     <TableCell>{class_.duration}</TableCell>
//                     <TableCell>{class_.students}</TableCell>
//                     <TableCell>
//                       <Badge 
//                         variant={class_.status === "scheduled" ? "default" : "secondary"}
//                       >
//                         {class_.status}
//                       </Badge>
//                     </TableCell>
//                     <TableCell>
//                       <div className="flex space-x-2">
//                         {class_.status === "scheduled" && (
//                           <Button variant="ghost" size="icon">
//                             <Play className="h-4 w-4" />
//                           </Button>
//                         )}
//                         <Button variant="ghost" size="icon">
//                           <LinkIcon className="h-4 w-4" />
//                         </Button>
//                         <Button variant="ghost" size="icon">
//                           <MessageSquare className="h-4 w-4" />
//                         </Button>
//                         <Button variant="ghost" size="icon">
//                           <Settings className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Quick Start Class</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="title">Class Title</Label>
//               <Input id="title" placeholder="Enter class title" />
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="course">Select Course</Label>
//                 <Input id="course" placeholder="Choose course" />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="duration">Duration</Label>
//                 <Input id="duration" placeholder="60 minutes" />
//               </div>
//             </div>
//             <Button className="w-full">
//               <Video className="mr-2 h-4 w-4" />
//               Start Live Class
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </DashboardShell>
//   );
// }