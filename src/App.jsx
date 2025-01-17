import { Router, createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import MasterLayout from "./layout/Master";
import Jobs from "./pages/job/Jobs";
import Job, { jobLoader } from "./pages/job/Job";
import AddJob from "./pages/job/AddJob";
import EditJob from "./pages/job/EditJob";

const addTheJob = async (newJob) => {
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(newJob)
  })
  return;
}

const updateTheJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
  })
  return;

}

const deleteTheJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE',
  })
  return;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MasterLayout />}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/create" element={<AddJob addNewJob={addTheJob} />} />
      <Route path="/jobs/:id" element={<Job deleteJob={deleteTheJob} />} loader={jobLoader} />
      <Route path="/jobs/edit/:id" element={<EditJob updateJob={updateTheJob} />} loader={jobLoader} />
      <Route path='*' element={<NotFound />} />
      
    </Route>
  )
)


const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App;