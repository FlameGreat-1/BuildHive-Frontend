import TradieAccountSetup from "@/userRoles/tradie/accountSetup/tradieAccountSetup"
import ProtectedRoutes from "../auth/protectedRoutes"
import TradieAccountSetupComplete from "@/userRoles/tradie/accountSetup/tradieAccountSetupComplete"
import Dashboard from "@/userRoles/tradie/dashboard/Dashboard"
import TradieHome from "@/userRoles/tradie/home/TradieHomepage"
import JobsInProgress from "@/userRoles/tradie/jobsInProgess/JobsInProgress"
import JobDetails from "@/userRoles/tradie/jobDetails/JobDetails"

const isAuthenticated = true
const role = 'tradie'

export const tradieRoutes = [
    {
        path: 'tradie',
        element: <ProtectedRoutes
            isAuthenticated={isAuthenticated}
            userRole={role}
            allowedRoles={['tradie']}
        />,
        children: [
            {
                path: 'account-setup',
                element: <TradieAccountSetup />
            },
            {
                path: 'account-setup/complete',
                element: <TradieAccountSetupComplete />
            },
            {
                path: '',
                element: <Dashboard />,
                children: [
                    {
                        path: 'home',
                        element: <TradieHome />
                    },
                    {
                        path: 'home/jobs-in-progress',
                        element: <JobsInProgress />
                    },
                    {
                        path: 'home/jobs/:id',
                        element: <JobDetails />
                    },


                ]
            },
        ]
    }
]