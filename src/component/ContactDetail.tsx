import Button from './Button';

interface ContactDetailProps {
  data: {
    id: string;
    img_url: string;
    name: string;
    email: string;
  };
  getAllContact: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export default function ContactDetail({ data, getAllContact, isLoading, setIsLoading }: ContactDetailProps) {
  // key={contact.id} id={contact.id} name={contact.name} img={contact.img_url} email={contact.email}
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const apiToken = import.meta.env.VITE_API_TOKEN;

  const onDelete = async () => {
    setIsLoading(true);
    const response = await fetch(`${apiBaseUrl}/api/contacts/${data.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });
    setIsLoading(false);
    const result = await response.json();
    if (result.success) {
      getAllContact();
    }
  };

  return (
    <div className="contact__detail">
      <div className="contact__detail-contact">
        <img src={data.img_url} alt={data.name} width={60} />
        <div className="contact__detail-person">
          <p>{data.name}</p>
          <p>{data.email}</p>
        </div>
      </div>
      <div>
        <Button type="submit" text="x" onClick={onDelete} className="contact__button" disable={isLoading}></Button>
      </div>
    </div>
  );
}
