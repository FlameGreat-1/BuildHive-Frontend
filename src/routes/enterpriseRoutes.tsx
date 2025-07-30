import EnterpriseAccountSetup from "@/userRoles/enterprise/accountSetup/EnterpriseAccountSetup"
import ProtectedRoutes from "@/auth/protectedRoutes"

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
            }
        ]
    }
]