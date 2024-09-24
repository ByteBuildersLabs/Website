import './main.css';

interface roadmapTeamInterface {
  date: string, title: string, text: string, link: string, picture: string, subtitle: string
}

function RoadmapTeam({ date, title, text, link, picture, subtitle }: roadmapTeamInterface) {
  return (
    <div className="new-contract-box section-tab yellow-border mt-4">
      <div className='d-flex align-items-center mb-2'>
        <p className={'title'}>
          <span className='d-block'>{date}</span>
          {title}
        </p>
      </div>
      <div>
        <p className={'subtitle'}>
          {subtitle}
        </p>
      </div>
      <a
        href={link}
        target='_blank'
      >
        <div className="new yellow-border mb-3">
          <img src={picture} alt="" />
        </div>
      </a>
      <p className={'subtitle text-center'}>
        {text}
      </p>
    </div>
  )
}

export default RoadmapTeam;
