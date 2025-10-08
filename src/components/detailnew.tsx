import Image from "next/image";

type Props = {
    newtitle: string;
    image: string;
    description: string;
    detail: string;
};

export default function DetailNew({ newtitle, image, description, detail }: Props) {
    return (
        <section
            className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
            style={{
                backgroundImage: "url('/images/herosection3.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            <div className="relative mt-30 z-10 max-w-6xl w-full bg-white/90 dark:bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

    
                <div className="md:w-1/2 flex flex-col items-center p-6 md:p-12 border-b md:border-b-0 md:border-r border-black/20 dark:border-white/20">

                    <div className="relative w-full h-64 md:h-[400px] mb-6">
                        <Image
                            src={image}
                            alt={newtitle}
                            fill
                            className="object-cover rounded-xl shadow-lg"
                            priority
                        />
                    </div>

                    <h2 className="text-3xl font-bold mb-4 text-center text-black dark:text-white">{newtitle}</h2>
                    <p className="text-lg text-center text-black dark:text-white">{description}</p>

                    
                    <div className="block md:hidden mt-6 text-center border-t border-black/20 dark:border-white/20 pt-6">

                        {detail.split("\n").map((line, index) => (
                            <p key={index} className="text-base leading-relaxed text-black dark:text-white">{line}</p>
                        ))}
                    </div>
                </div>

                <div className="hidden md:flex md:w-1/2 p-6 md:p-12">
                    <article className="text-lg leading-relaxed text-left w-full text-black dark:text-white">
                        {detail.split("\n").map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </article>
                </div>


            </div>
        </section>
    );
}
