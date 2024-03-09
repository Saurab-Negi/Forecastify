import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import "./InfoBox.css"

function InfoBox({info}) {
    const INIT_URL="https://img.freepik.com/free-photo/cloud-blue-sky_1232-3108.jpg?t=st=1709979535~exp=1709983135~hmac=8ce3c428a1992e762d8a864b4354ed8420fa14057d3f9d8c92bebd65051a254e&w=996";
    const NORMAL_URL="https://img.freepik.com/free-vector/blank-landscape-scene-nature-park-sunset-time_1308-70156.jpg?t=st=1709979398~exp=1709982998~hmac=a2f94b87baeddeffbe46cb75e7976bc90b8b57da06a187ffc077c030ae3e6b9f&w=1060";
    const HOT_URL="https://img.freepik.com/free-vector/sunny-weather-with-coconut-trees_1308-83481.jpg?w=900&t=st=1709978813~exp=1709979413~hmac=d384c5e62a2ca6c11623021b9dbd0e1a836abc5e81e88e90962e232ae3968943";
    const RAIN_URL="https://img.freepik.com/free-vector/family-running-rain_1308-25713.jpg?t=st=1709979262~exp=1709982862~hmac=ad11334162e94a549d69b28798f2f8269db46022adecc3b1afcdfb21e15dcc5b&w=1060";
    const COLD_URL="https://img.freepik.com/free-vector/flat-background-winter-season-with-snowman-house_23-2150919148.jpg?t=st=1709979121~exp=1709982721~hmac=0b473e37726bcd936712914dc2d265b30a5e2c50cb68cc91a6618c5775d73d7f&w=996";
  return (
    <div className="InfoBox">
      <div className='card-container'>
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardMedia className='card-image'
        sx={{ height: 190 }}
        image={ (info.humidity>80) ? RAIN_URL : (info.temp<1) ? COLD_URL : (info.temp>35) ? HOT_URL : NORMAL_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.weather}&nbsp;in&nbsp;{info.city} &nbsp;
          { (info.humidity>80) ? <ThunderstormIcon/> : (info.temp<1) ? <AcUnitIcon/> : (info.temp>35) ? <WbSunnyIcon/> : <FilterDramaIcon/> }
        </Typography>
        <Typography className='para' variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Min Temp = {info.tempMin}&deg;C&nbsp;&nbsp;&nbsp;Max Temp = {info.tempMax}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>The weather feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}

export default InfoBox
