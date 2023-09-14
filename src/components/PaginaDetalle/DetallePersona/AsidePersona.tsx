type Props = {
  about: string;
};

const AsidePersona = ({ about }: Props) => {
  return (
    <div className="overflow-hidden flex flex-col flex-wrap gap-4 mt-4">
      <p className="whitespace-pre-line max-w-full">{about}</p>
    </div>
  );
};

export default AsidePersona;
