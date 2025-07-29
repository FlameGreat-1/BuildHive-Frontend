import TradieAccountSetup from "@/tradie/accountSetup/tradieAccountSetup"
import ProtectedRoutes from "../pages/auth/protectedRoutes"
import TradieAccountSetupComplete from "@/tradie/accountSetup/tradieAccountSetupComplete"

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
                path:'account-setup',
                element:<TradieAccountSetup/>
            },
            {
                path:'account-setup/complete',
                element:<TradieAccountSetupComplete/>
            },
        ]
    }
]