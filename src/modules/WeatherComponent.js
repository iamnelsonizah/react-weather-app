import styled from "styled-components";

export const WeatherInfoIcons = {
    sunset: "/icon/temp.svg",
    sunrise: "/icon/temp.svg",
    humidity: "/icon/humidity.svg",
    wind: "/icon/wind.svg",
    pressure: "/icon/pressure.svg",
};

export const WeatherIcons = {
    "01d": "/icon/sunny.svg",
    "01n": "/icon/night.svg",
    "02d": "/icon/day.svg",
    "02n": "/icon/cloudy-night.svg",
    "03d": "/icon/cloudy.svg",
    "03n": "/icon/cloudy.svg",
    "04d": "/icon/perfect-day.svg",
    "04n": "/icon/cloudy-night.svg",
    "09d": "/icon/rain.svg",
    "09n": "/icon/rain-night.svg",
    "010d": "/icon/rain.svg",
    "010n": "/icon/rain-night.svg",
    "011d": "/icon/storm.svg",
    "011n": "/icon/storm.svg",
};




const WeatherCondition =  styled.div`
    display: flex;
    flex-direction: row;
    align: center;
    width: 100%;
    justify-content: space-between;
    margin: 30px auto;

`;

const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

const Location = styled.span`
    font-size: 28px;
    font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const WeatherInfoComponent = (props)=>{
    const { name, value } = props;
    return(
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    )
}

const WeatherComponent = (props)=>{

    const {weather} = props;

    const isDay = weather?.weather[0].icon?.includes("d");

    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    return (
        <>

        <WeatherCondition>
            <Condition>   
            <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
            </Condition>
            <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]}/>
        </WeatherCondition>
        <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
        <WeatherInfoLabel>Weather, Info</WeatherInfoLabel>
        <WeatherInfoContainer>
            <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"} value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}/>
            <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
            <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
            <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
        </WeatherInfoContainer>
        </>
    )
}

export default WeatherComponent