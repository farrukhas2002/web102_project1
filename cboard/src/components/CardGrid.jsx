import Card from './Card';

const CardGrid = () => {
    return (
        <div className="CardGrid">
            <Card event='frisbee' eventname='Annual FrisbeeFest' date='03/23/2029' time='2PM'/>
            <Card event='bbq' eventname='Hilltop Cookout' date='4/14/2029' time='6PM'/>
            <Card event='musicfest' eventname='Hilltop Music Festival 2029' date='5/16/2029' time='7PM'/>
            <Card event='marathon' eventname='American Heart Society Marathon' date='6/03/2029' time='9:30AM'/>
            
            <Card event='indianfestival' eventname='Annual Indian Food & Culture Festival' date='6/11/2029' time='1:30PM'/>
            <Card event='sackrace' eventname='Hilltop Sack Race' date='6/15/2029' time='4:30PM'/>
            <Card event='fireworks' eventname='Annual 4th of July Show' date='7/04/2029' time='8:00PM'/>
            
            <Card event='stargazing' eventname='Lights Out Stargazing Festival' date='9/05/2029' time='9:00PM'/>
            <Card event='halloween' eventname='Hilltop Halloween Fest' date='10/31/2029' time='6:20PM'/>
            <Card event='carnivalfest' eventname='Hilltop Annual Fair' date='11/21/2029' time='4:00PM'/>
        </div>
    )

}

export default CardGrid;