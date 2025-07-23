import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import client from '../../assets/images/clientRole.png'
import tradie from '../../assets/images/tradieRole.png'
import enterprise from '../../assets/images/enterpriseRole.png'
import { Link } from "react-router-dom"
import RoleCard from "./components/roleCard"
import PurpleBtn from "../../generalComponents/purpleBtn"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import UserSignUp from "./components/userSignUp"
import { validateConfirmPassword, validateEmail, validatePassword, validateUsername } from "../../utils/validators"
import ConfirmEmailSignUp from "./components/confirmEmailSignUp"
import SignUpComplete from "./components/signUpComplete"



const roles = [
    {
        role: 'Client',
        image: client,
        description: 'Post jobs, hire tradies.'
    },
    {
        role: 'Tradie',
        image: tradie,
        description: 'Post jobs, hire tradies.'
    },
    {
        role: 'Enterprise',
        image: enterprise,
        description: 'Post jobs, hire tradies.'
    },
]


const SignUp = () => {

    const [steps, setSteps] = useState(0)
    const [chosenRole, setChosenRole] = useState('')
    const [error, setError] = useState('')
    const [disableBtn, setDisableBtn] = useState(true)
    const nextStep = () => setSteps(steps + 1)
    const pickChosenRole = (role: string) => setChosenRole(role)
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAndPolicy: false,
        newsletter: false
    })

    const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { username, email, password, confirmPassword, termsAndPolicy, newsletter } = form

        if (!username || !email || !password || !termsAndPolicy || !newsletter || !confirmPassword) {

            setDisableBtn(true)
        } else {
            setDisableBtn(false)
        }
        const { checked } = e.target
        const { name, value } = e.target

        const isUsernameValid = validateUsername(value)
        const isPasswordValid = validatePassword(value)
        const isConfirmPasswordValid = validateConfirmPassword(password,value)
        const isEmailValid = validateEmail(value)

        switch (name) {
            case 'username':
                if (isUsernameValid !== true) {
                    setError(isUsernameValid)
                    setDisableBtn(true)
                } else {
                    setError('')
                    setDisableBtn(false)
                }
                break;
            case 'email':
                if (isEmailValid !== true) {
                    setError(isEmailValid)
                    setDisableBtn(true)
                } else {
                    setError('')
                    setDisableBtn(false)
                }
                break;
            case 'confirmPassword':
                if (isConfirmPasswordValid !== true) {
                    setError(isConfirmPasswordValid)
                    setDisableBtn(true)
                } else {
                    setError('')
                    setDisableBtn(false)
                }
                break;
            case 'password':
                if (isPasswordValid !== true) {
                    setError (isPasswordValid)
                    setDisableBtn(true)
                } else {
                    setError('')
                    setDisableBtn(false)
                }
                
                break;
            default:
                setError('')
                break;
        }

        if ((name === 'termsAndPolicy') || (name === 'newsletter')) {
            setForm({ ...form, [name]: checked })
            // console.log(name, checked)
            if (name === 'newsletter' && termsAndPolicy) {
                setDisableBtn(false)
            }
            if (name === 'termsAndPolicy' && newsletter) {
                setDisableBtn(false)}
            return
        }
        setForm({ ...form, [name]: value.trim() })
        console.log(name, value)


        // setDisableBtn(false)
    }
    const handleSignIn = () => {
        
        const { username, email, password, confirmPassword, termsAndPolicy, newsletter } = form
        const isUsernameValid = validateUsername(username)
        const isPasswordValid = validatePassword(password)
        const isConfirmPasswordValid = validateConfirmPassword(password,confirmPassword)
        const isEmailValid = validateEmail(email)

        if (!username || !email || !password || !termsAndPolicy || !newsletter || !confirmPassword) {
            setError('Please fill in all fields')
            setDisableBtn(true)
            return
        } else {
            setDisableBtn(false)
        }
        try {
            if(isUsernameValid === true && isEmailValid === true && isPasswordValid === true && isConfirmPasswordValid === true && newsletter && termsAndPolicy){
                console.log(form)
                nextStep()
            }
            else {
                setError('Please fill in all fields properly!')
                throw new Error("");
                
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="relative text-dark-black">
            <div className="w-screen bg-light-white h-screen flex flex-col text-black items-center px-4 pt-12 ">
                <div
                    onClick={() => { }}
                    className="flex-btw w-full p-2 text-base md:text-lg max-w-[1200px] absolute top-0 z-10">
                    <div className="flex-center p-2 gap-2">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <p className="font-semibold">Go Back</p>
                    </div>
                    <Link to='/help' className="text-primary-purple font-semibold">Need help?</Link>
                </div>
                <AnimatePresence mode='wait'>
                    {
                        steps === 0 &&
                        <motion.div
                            initial={{ x: 100 }}
                            animate={{ x: 0 }}
                            exit={{ x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="p-4 text-center flex-center flex-col gap-4 md:gap-[10vh] w-fit">
                                <div className="flex-col space-y-2 md:space-y-4">
                            <p className="text-2xl md:text-3xl ">Choose your role below</p>
                            <p className="text-base max-w-[400px]">Choose your role to get started. You can always create another account later.</p>
                                </div>
                            <div id="role" className="flex-center ">
                                <div className="flex flex-wrap gap-4  justify-center ">
                                    {
                                        roles.map((role, index) => (
                                            <RoleCard
                                                chosenRole={chosenRole} chooseRole={pickChosenRole} {...role} key={index} />
                                        ))
                                    }
                                </div>
                            </div>
                            <PurpleBtn text="Get started →" classes="min-w-[300px]" disabled={chosenRole ? false : true} click={() => nextStep()} />
                        </motion.div>
                    }
                    {
                        steps === 1 && (
                            <UserSignUp
                                updateForm={updateForm}
                                {...form}
                                btnSignUp={handleSignIn}
                                error={error}
                                disableBtn={disableBtn}
                            />
                        )
                    }
                    {
                        steps === 2 && (
                        <ConfirmEmailSignUp email={form.email} nextSteps={nextStep}/>
                        )
                    }
                    {
                        steps === 3 && (
                        <SignUpComplete/>
                        )
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default SignUp