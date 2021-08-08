import Calendar from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css';

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('ru-RU', { weekday: 'short', month: 'long', day: 'numeric' })
    .format(new Date(dateString))
    .replaceAll(',', '\n')
}

export function useSchedule(selector: string) {
  return new Calendar(
    selector,
    {
      taskView: false,
      isReadOnly: true,
      disableClick: false,
      disableDblClick: false,
      defaultView: 'week',
      template: {
        weekDayname: v => formatDate(v.renderDate),
        timegridCurrentTime: () => '',
        timegridDisplayPrimayTime: (time) => `${time.hour}:00`
      },
      theme: {
        // week header 'dayname'
        'week.dayname.height': '80px',
        'week.dayname.paddingLeft': '12px',
        'week.dayname.paddingRight': '12px',
        'week.dayname.textAlign': 'center',

        // week vertical panel 'vpanel'
        'week.vpanelSplitter.border': '1px solid #ddd',
        'week.vpanelSplitter.height': '3px',

        // week daygrid 'daygrid'
        'week.daygrid.borderRight': '1px solid #ddd',
        'week.daygrid.backgroundColor': 'inherit',

        'week.daygridLeft.width': '77px',
        'week.daygridLeft.backgroundColor': '#a8def74d',
        'week.daygridLeft.paddingRight': '5px',
        'week.daygridLeft.borderRight': '1px solid #ddd',

        // week timegrid 'timegrid'
        'week.timegridLeft.width': '77px',
        'week.timegridLeft.backgroundColor': '#03a9f44d',
        'week.timegridLeft.borderRight': '1px solid #ddd',
        'week.timegridLeft.fontSize': '12px',
        'week.timegridLeftTimezoneLabel.height': '51px',
        'week.timegridLeftAdditionalTimezone.backgroundColor': '#fdfdfd',

        'week.timegridOneHour.height': '48px',
        'week.timegridHalfHour.height': '24px',
        'week.timegridHalfHour.borderBottom': '1px dotted #f9f9f9',
        'week.timegridHorizontalLine.borderBottom': '1px solid #eee',

        'week.timegrid.paddingRight': '10px',
        'week.timegrid.borderRight': '1px solid #ddd',
        'week.timegridSchedule.borderRadius': '0',
        'week.timegridSchedule.paddingLeft': '0',

        'week.currentTime.color': '#135de6',
        'week.currentTime.fontSize': '12px',
        'week.currentTime.fontWeight': 'bold',

        'week.pastTime.color': '#808080',
        'week.pastTime.fontWeight': 'normal',

        'week.futureTime.color': '#333',
        'week.futureTime.fontWeight': 'normal',

        'week.currentTimeLinePast.border': '1px solid rgba(19, 93, 230, 0.3)',
        'week.currentTimeLineBullet.backgroundColor': '#135de6',
        'week.currentTimeLineToday.border': '1px solid #135de6',
        'week.currentTimeLineFuture.border': '1px solid #135de6',

        // week creation guide style
        'week.creationGuide.color': '#135de6',
        'week.creationGuide.fontSize': '12px',
        'week.creationGuide.fontWeight': 'bold',

        // week daygrid schedule style
        'week.dayGridSchedule.borderRadius': '0',
        'week.dayGridSchedule.height': '18px',
        'week.dayGridSchedule.marginTop': '2px',
        'week.dayGridSchedule.marginLeft': '10px',
        'week.dayGridSchedule.marginRight': '10px'
      },
      week: {
        hourStart: 8,
        hourEnd: 21,
      },
    }
  );
}
