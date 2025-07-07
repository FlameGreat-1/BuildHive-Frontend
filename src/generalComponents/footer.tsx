import buildHive from '../assets/icons/buildHive.svg'
import fb from '../assets/icons/Facebook.png'
import insta from '../assets/icons/Instagram.png'
import x from '../assets/icons/Twitter.png'
import linkedIn from '../assets/icons/Linkedin.png'

const links: string[] = [fb, insta, x, linkedIn]
const specialLinks = [
    {
        header: 'Products',
        links: [
            {
                text: 'Features',
                path: '.'
            },
            {
                text: 'Pricing',
                path: '.'
            },
            {
                text: 'Marketplace',
                path: '.'
            },
            {
                text: 'CRM',
                path: '.'
            },
        ]
    },
    {
        header: 'Company',
        links: [
            {
                text: 'About Us',
                path: '.'
            },
            {
                text: 'Careers',
                path: '.'
            },
            {
                text: 'Blogs',
                path: '.'
            },
            {
                text: 'Contact',
                path: '.'
            },
        ]
    },
    {
        header: 'Connect',
        links: [
            {
                text: 'Twitter',
                path: '.'
            },
            {
                text: 'Instagram',
                path: '.'
            },
            {
                text: 'Facebok',
                path: '.'
            },
            {
                text: 'Linkedin',
                path: '.'
            },
        ]
    }
]

const Footer = () => {
    return (
        <footer className='w-full flex-center p-4 text-light-white bg-black'>
            <div className="max-w-6xl w-full">
                <div className="flex flex-col items-center justify-self-center sm:flex-row justify-between w-full">
                    <div className=" flex-center flex-col gap-1 w-fit">
                        <img src={buildHive} alt="buildhive logo" className='aspect-square rounded-[50%] bg-light-white w-[3rem]' />
                        <p className="font-bold text-sm  text-light-white">
                            BUILDHIVE
                        </p>
                    </div>
                    <div className='w-full flex flex-wrap gap-12 p-8 sm:justify-end'>
                        {
                            specialLinks.map((item, index) => (
                                <div key={index} className='text-light-white flex flex-col justify-start'>
                                    <p className='font-bold'>{item.header}</p>
                                    {item.links.map((link, index) => (
                                        <a href={link.path} className='text-light-white font-light' key={index}>{link.text}</a>
                                    ))}
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="flex flex-col border-t-2 py-2 border-light-white">
                    <div className="flex flex-col items-center gap-2 sm:flex-row justify-between">
                        <p className="text-xs">&copy; 2025 BuildHive. All right reserved.</p>
                        <div className="flex justify-center items-center flex-col">
                            <div className='flex gap-4'>
                                {links.map((link, index) =>
                                (
                                    <a href="." key={index}><img src={link} alt="socials" className='w-4 ' /></a>
                                )
                                )
                                }
                            </div>
                            <div className="flex-center gap-2">
                                <p className="border-r bprder-1 border-light-white text-xs pr-2">Terms</p>
                                <p className='text-xs'>Privacy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer