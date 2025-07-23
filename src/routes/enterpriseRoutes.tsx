import ProtectedRoutes from "../pages/auth/protectedRoutes"

const isAuthenticated = true
const role = 'enterprise'

export const enterpriseRoutes = [
    {
        path: '/enterprise',
        element: <ProtectedRoutes
            isAuthenticated={isAuthenticated}
            userRole={role}
            allowedRoles={['enterprise']}
        />,
        children: [
            {

            }
        ]
    }
]