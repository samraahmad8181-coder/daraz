import featureImage from '../assets/feature.png'

function Feature() {
    return (
        <section className="mx-auto mt-6 flex max-w-7xl justify-center px-3 sm:px-6 lg:px-8">
            <div className="w-full overflow-hidden rounded-[24px] bg-[#f3f4f6] shadow-[0_8px_24px_rgba(107,114,128,0.18)]">
                <img
                    src={featureImage}
                    alt="Featured promotion"
                    className="h-[140px] w-full object-fill sm:h-[180px] lg:h-[220px]"
                />
            </div>
        </section>
    )
}

export default Feature
