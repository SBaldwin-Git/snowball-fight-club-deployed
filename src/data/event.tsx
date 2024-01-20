export interface SnowballFight {
  id: string;
  position: {
    long: number;
    lat: number;
  };
  date: Date;
  description: string;
  name?: string;
}

const FightMarker: React.FC<SnowballFight> = (props) => {
  const { position, date, description, name } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{date.toLocaleDateString()}</p>
      <p>
        {position.lat}, {position.long}
      </p>
    </div>
  );
};

const FightList: React.FC<SnowballFight[]> = (props) => {
  return (
    <FightMarker
      id="6c68cbe7-187f-48a4-8d18-350547a75357"
      position={{
        long: -122.4194,
        lat: 37.7749,
      }}
      date={new Date()}
      description="This is a fight"
    />
  );
};
