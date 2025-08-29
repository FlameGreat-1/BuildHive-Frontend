import ClientAccountSetupComplete from "@/userRoles/client/accountSetup/ClientAccountSetupComplete"
import ClientAccountSetup from "@/userRoles/client/accountSetup/ClientAccountSetup"
import ProtectedRoutes from "@/auth/protectedRoutes"
import Dashboard from "@/userRoles/client/dashboard/Dashboard"
import ClientHome from "@/userRoles/client/home/ClientHomepage"
import JobCastPage from "@/userRoles/client/jobCast/JobCastPage"
import CreateTask from "@/userRoles/client/home/createTask/CreateTask"
import PostJobs from "@/userRoles/client/postJobs/PostJobs"
import JobPosted from "@/userRoles/client/postJobs/JobPosted"
import MyJobs from "@/userRoles/client/myJobs/MyJobs"
import BrowseTradies from "@/userRoles/client/browseTradies/BrowseTradies"
import TradieProfile from "@/userRoles/client/browseTradies/TradieProfile"

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
                children: [
                    {
                        path: 'home',
                        element: <ClientHome />
                    },
                    {
                        path: 'home/create-task',
                        element: <CreateTask />
                    },
                    {
                        path: 'home/post-jobs',
                        element: <PostJobs />
                    },
                    {
                        path: 'home/job-live',
                        element: <JobPosted />
                    },
                    {
                        path: 'home/my-jobs',
                        element: <MyJobs />
                    },
                    {
                        path: 'home/browse-tradies',
                        element: <BrowseTradies />
                    },
                    {
                        path: 'home/browse-tradies/:tradie',
                        element: <TradieProfile />
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