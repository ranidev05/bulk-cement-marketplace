interface TestimonialProps {
  name: string;
  company: string;
  content: string;
}

export const Testimonial = ({ name, company, content }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 italic mb-4">{content}</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  );
};