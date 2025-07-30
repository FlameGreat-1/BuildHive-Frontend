import ClientAccountSetupComplete from "@/userRoles/client/accountSetup/ClientAccountSetupComplete"
import ClientAccountSetup from "@/userRoles/client/accountSetup/ClientAccountSetup"
import ProtectedRoutes from "@/auth/protectedRoutes"

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
        ]
    }
]