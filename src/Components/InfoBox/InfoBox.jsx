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
    const INIT_URL="https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const NORMAL_URL="https://images.unsplash.com/photo-1561518742-cd79b7ca5090?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://plus.unsplash.com/premium_photo-1673264933092-a795ddc9f11b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1535009903055-7448b7543fee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1682976668643-726e66844855?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  return (
    <div className="InfoBox">
      <h3>{info.weather} weather</h3>
      <div className='card-container'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ (info.humidity>80) ? RAIN_URL : (info.temp<1) ? COLD_URL : (info.temp>35) ? HOT_URL : NORMAL_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;
          { (info.humidity>80) ? <ThunderstormIcon/> : (info.temp<1) ? <AcUnitIcon/> : (info.temp>35) ? <WbSunnyIcon/> : <FilterDramaIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
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
