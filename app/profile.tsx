import Image from 'next/image'

export default function Profile() {
    return (

        <div className="p-1">
            <div className="sm:col-span-12 md:col-span-3">
                <div className="flex justify-center items-center">
                    <Image className="sm:w-full md:w-96" src="/images/groovy_rectangle.png" alt="rectangle" height={245} width={250} />
                    {/* <Image className="sm:w-full md:w-96" src="/images/portfolio_text.png" alt="portfolio_text" width="194" height="194" /> */}
                </div>
            </div>
            <Image className="md:float-right sm:float-left relative sm:bottom-20" src="/images/teasing_frown.png" alt="teasing_frown" height={74.58} width={73.32} />
        </div>
    )
}