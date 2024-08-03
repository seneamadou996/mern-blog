import React from 'react';
import {Footer} from 'flowbite-react';
import { Link } from 'react-router-dom'
import { 
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsGithub,
    BsTiktok
 } from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                    <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold
                    dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sene's</span>
                        Blog
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title='A propos'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='https://www.100jsprojects.com'
                                target='_blank'
                                rel='noopenner noreferrer'
                            >
                                100 projets JS
                            </Footer.Link>
                            <Footer.Link
                                href='/about'
                                target='_blank'
                                rel='noopenner noreferrer'
                            >
                                Sene's Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Suivez-nous'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='https://www.github.com/seneamadou996'
                                target='_blank'
                                rel='noopenner noreferrer'
                            >
                                Github
                            </Footer.Link>
                            <Footer.Link href='#'>
                                Discorde
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='#'>
                                Politique de confidentialité
                            </Footer.Link>
                            <Footer.Link href='#'>
                                Conditions &amp; Générales 
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href='#' by="Sene's Blog" year={new Date().getFullYear()}/>
            </div>
            <div className="flex gap-6 sm:mt-0 mt-4 md:justify-end sm:justify-center">
                <Footer.Icon href='#' icon={BsFacebook}/>
                <Footer.Icon href='#' icon={BsInstagram}/>
                <Footer.Icon href='#' icon={BsTwitter}/>
                <Footer.Icon href='https://www.github.com/seneamadou996' icon={BsGithub}/>
                <Footer.Icon href='#' icon={BsTiktok}/>
            </div>
        </div>
    </Footer>
  )
}
