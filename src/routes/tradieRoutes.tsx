import ProtectedRoutes from "../pages/auth/protectedRoutes"

const isAuthenticated = true
const role = 'tradie'

export const tradieRoutes = [
    {
        path: '/tradie',
        element: <ProtectedRoutes
            isAuthenticated={isAuthenticated}
            userRole={role}
            allowedRoles={['tradie']}
        />,
        children: [
            {

            }
        ]
    }
]