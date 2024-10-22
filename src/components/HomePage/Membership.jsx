import Google from '../../assets/membership/google.JPG'
import Iab from '../../assets/membership/iab.JPG'
import Winter from '../../assets/membership/winter.JPG'
import Ft from '../../assets/membership/ft.JPG'


const Membership = () => {
    return (
        <div className="container my-14 mx-auto p-2">
            <h2 className="text-3xl font-semibold text-gray-700">Membership & Accolades</h2>
            <div className='flex gap-6 flex-wrap my-10'>
                <img className='w-[350px]' src={Google} alt="" />
                <img className='w-[120px]' src={Iab} alt="" />
                <img className='w-[90px]' src={Winter} alt="" />
                <img className='w-[350px]' src={Ft} alt="" />
            </div>
        </div>
    );
};

export default Membership;