import EnterpriseAccountSetup from "@/userRoles/enterprise/accountSetup/EnterpriseAccountSetup"
import ProtectedRoutes from "@/auth/protectedRoutes"
import EnterpriseAccountSetupComplete from "@/userRoles/enterprise/EnterpriseAccountSetupComplete"

const isAuthenticated = true
const role = 'enterprise'

export const enterpriseRoutes = [
    {
        path: 'enterprise',
        element: <ProtectedRoutes
            isAuthenticated={isAuthenticated}
            userRole={role}
            allowedRoles={['enterprise']}
        />,
        children: [
            {
                path: 'account-setup',
                element: <EnterpriseAccountSetup />
            },
            {
                path: 'account-setup/complete',
                element: <EnterpriseAccountSetupComplete />
            },
        ]
    }
]