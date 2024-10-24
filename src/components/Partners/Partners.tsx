import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

interface PartnerProp  {
    image: string
    duration: number
}

const partners:PartnerProp[]= [
    {
        image:"https://s3-alpha-sig.figma.com/img/414f/cec1/da158fffe6db3938bd10fb44368ea1e0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiMw0VcLhruRaKH0IHt6NMaTnO6dexo2sDQEvqGkp8fuTQgP0jLgyhtfvu0nFkB6nE3UxYY8hVpxDuKNnimhWGX3Io68tQJPkPfgFKOlKl5rFW~jiv2TzJGVaye~ALwGAhYqcMMlhCGq4rFjrarpUsQ5wg28fqE00P94ARmtGPUbzBpj0UDWVok2J2JimI1-Md0LuQu-exrPQhucRMyOV8XnV7h2Y4MX-wDNHVc3my4Ou33XRdZFr31lXr1GrE3iuk71NgfMCi7aMhdUKVgI~OdCVUqqyBLRVFNmPgh~fTaf6RjivRJKhaylIIp0kPbA0bTvA6IMILJR3NwjCMu7HQ__",
        duration: 400
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/414f/cec1/da158fffe6db3938bd10fb44368ea1e0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiMw0VcLhruRaKH0IHt6NMaTnO6dexo2sDQEvqGkp8fuTQgP0jLgyhtfvu0nFkB6nE3UxYY8hVpxDuKNnimhWGX3Io68tQJPkPfgFKOlKl5rFW~jiv2TzJGVaye~ALwGAhYqcMMlhCGq4rFjrarpUsQ5wg28fqE00P94ARmtGPUbzBpj0UDWVok2J2JimI1-Md0LuQu-exrPQhucRMyOV8XnV7h2Y4MX-wDNHVc3my4Ou33XRdZFr31lXr1GrE3iuk71NgfMCi7aMhdUKVgI~OdCVUqqyBLRVFNmPgh~fTaf6RjivRJKhaylIIp0kPbA0bTvA6IMILJR3NwjCMu7HQ__",
        duration: 600
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/414f/cec1/da158fffe6db3938bd10fb44368ea1e0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiMw0VcLhruRaKH0IHt6NMaTnO6dexo2sDQEvqGkp8fuTQgP0jLgyhtfvu0nFkB6nE3UxYY8hVpxDuKNnimhWGX3Io68tQJPkPfgFKOlKl5rFW~jiv2TzJGVaye~ALwGAhYqcMMlhCGq4rFjrarpUsQ5wg28fqE00P94ARmtGPUbzBpj0UDWVok2J2JimI1-Md0LuQu-exrPQhucRMyOV8XnV7h2Y4MX-wDNHVc3my4Ou33XRdZFr31lXr1GrE3iuk71NgfMCi7aMhdUKVgI~OdCVUqqyBLRVFNmPgh~fTaf6RjivRJKhaylIIp0kPbA0bTvA6IMILJR3NwjCMu7HQ__",
        duration: 800
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/414f/cec1/da158fffe6db3938bd10fb44368ea1e0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiMw0VcLhruRaKH0IHt6NMaTnO6dexo2sDQEvqGkp8fuTQgP0jLgyhtfvu0nFkB6nE3UxYY8hVpxDuKNnimhWGX3Io68tQJPkPfgFKOlKl5rFW~jiv2TzJGVaye~ALwGAhYqcMMlhCGq4rFjrarpUsQ5wg28fqE00P94ARmtGPUbzBpj0UDWVok2J2JimI1-Md0LuQu-exrPQhucRMyOV8XnV7h2Y4MX-wDNHVc3my4Ou33XRdZFr31lXr1GrE3iuk71NgfMCi7aMhdUKVgI~OdCVUqqyBLRVFNmPgh~fTaf6RjivRJKhaylIIp0kPbA0bTvA6IMILJR3NwjCMu7HQ__",
        duration: 1000
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/414f/cec1/da158fffe6db3938bd10fb44368ea1e0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiMw0VcLhruRaKH0IHt6NMaTnO6dexo2sDQEvqGkp8fuTQgP0jLgyhtfvu0nFkB6nE3UxYY8hVpxDuKNnimhWGX3Io68tQJPkPfgFKOlKl5rFW~jiv2TzJGVaye~ALwGAhYqcMMlhCGq4rFjrarpUsQ5wg28fqE00P94ARmtGPUbzBpj0UDWVok2J2JimI1-Md0LuQu-exrPQhucRMyOV8XnV7h2Y4MX-wDNHVc3my4Ou33XRdZFr31lXr1GrE3iuk71NgfMCi7aMhdUKVgI~OdCVUqqyBLRVFNmPgh~fTaf6RjivRJKhaylIIp0kPbA0bTvA6IMILJR3NwjCMu7HQ__",
        duration: 1200
    },
]

export const Partners: React.FC = () => {

    return (
        <div className="flex items-center justify-center flex-col mt-36 overflow-hidden">
            <h1
                data-aos="fade-up"
                data-aos-duration="300"
                className="text-lg md:text-3xl font-inter font-bold"
            >
                OUR COMPANY PARTNER
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                {partners.map((partner, index) => (
                <div
                    data-aos="fade-up"
                    data-aos-duration={partner.duration}
                    data-aos-anchor-placement="center-bottom"
                    key={index}
                    className="max-w-[200px] w-full bg-white rounded-md flex items-center justify-center"
                >
                    <img
                    src={partner.image}
                    alt="Partner"
                    className="w-full h-auto object-contain p-4"
                    />
                </div>
                ))}
            </div>
        </div>
    )
}