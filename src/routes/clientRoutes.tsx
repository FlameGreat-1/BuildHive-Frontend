import ClientAccountSetupComplete from "@/userRoles/client/accountSetup/ClientAccountSetupComplete"
import ClientAccountSetup from "@/userRoles/client/accountSetup/ClientAccountSetup"
import ProtectedRoutes from "@/auth/protectedRoutes"
import Dashboard from "@/userRoles/client/dashboard/Dashboard"
import ClientHome from "@/userRoles/client/home/ClientHomepage"
import JobCastPage from "@/userRoles/client/jobCast/JobCastPage"
import CreateTask from "@/userRoles/client/jobCast/createTask/CreateTask"

const isAuthenticated = true
const role = 'client'

export const clientRoutes = [
    {
        path: 'client',
        element: <ProtectedRoutes
            isAuthenticated={isAuthenticated}
            userRole={role}
            allowedRoles={['client']}
        />,
        children: [
            {
                path: 'account-setup',
                element: <ClientAccountSetup />
            },
            {
                path: 'account-setup/complete',
                element: <ClientAccountSetupComplete />
            },
            {
                path: '',
                element: <Dashboard />,
                children:[
                {
                    path: 'home',
                    element: <ClientHome />
                },
                {
                    path: 'home/create-task',
                    element: <CreateTask />
                },
                {
                    path: 'job-cast',
                    element: <JobCastPage />
                },

                ]
            },
        ]
    }
]