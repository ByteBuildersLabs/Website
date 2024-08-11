import './main.css';

interface RoadmapMonthProps {
  completed: boolean;
  title: string;
  title2: string;
  subtitle1: string;
  subtitle2: string;
  subtitle3: string;
  subtitle4: string;
}

function RoadmapMonth({completed, title, title2, subtitle1, subtitle2, subtitle3, subtitle4}: RoadmapMonthProps) {
  return (
    <div className="new-contract-box section-tab yellow-border mt-4">
      <div className='d-flex align-items-center mb-2'>
        <p className={'title'}>
          {title}
          <span className='d-block'>{title2}</span>
        </p>
      </div>
      <div>
        <p className={'subtitle'}>
          {subtitle1}
        </p>
        <p className={'subtitle'}>
          {subtitle2}
        </p>
        <p className={'subtitle'}>
          {subtitle3}
        </p>
        <p className={'subtitle'}>
          {subtitle4}
        </p>
        {completed && 
        <div className="product-tag">
          <span style={{color: '#fff'}}>Completed</span>
        </div>}
      </div>
    </div>
  )
}

export default RoadmapMonth;
