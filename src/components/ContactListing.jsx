
import {LuPhone as Phone} from "react-icons/lu";
import {FiMail as Mail} from "react-icons/fi";
import {IoLocationOutline as Location} from "react-icons/io5";

const contactDetails = [
    {
        Icon: Phone,
        title: 'Phone',
        description: 'Reach out anytime for immediate care coordination and support.',
        link: 'tel:+25-079-115-300',
        linkText: '+25-079-115-300'
    },
    {
        Icon: Mail,
        title: 'Email',
        description: 'Contact us for detailed queries or assistance with care management.',
        link: 'mailto:contact@caresync.com',
        linkText: 'contact@caresync.com'
    },
    {
        Icon: Location,
        title: 'Location',
        description: 'Visit us for in-person consultations and personalized care solutions.',
        link: 'https://goo.gl/maps/abc123',
        linkText: '123 Care St, City, Country'
    }
];

const ContactListing = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6">
            {contactDetails.map((contact, idx) => (
                <div key={idx} className="flex flex-col gap-2 items-center justify-center">
                    <div
                        className="h-[65px] w-[65px] bg-mut-blue flex items-center justify-center rounded-md text-4xl text-dc-blue">
                        <contact.Icon />
                    </div>
                    <h4 className="text-dark font-semibold text-[1.125rem]">{contact.title}</h4>
                    <p className="font-medium text-muted text-center">{contact.description}</p>
                    <a href={contact.link} className="text-dc-blue">{contact.linkText}</a>
                </div>
            ))}
        </div>
    );
};


export default ContactListing;
