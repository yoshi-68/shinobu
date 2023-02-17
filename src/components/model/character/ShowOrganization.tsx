import { CharacterIcons, Organization } from '@/@types/types';
import atkIcon from '@/images/atk.png';
import defIcon from '@/images/def.png';
import heartIcon from '@/images/heart.svg';
import heartBrakIcon from '@/images/heartbreak.svg';

type ShowOrganizationProps = {
  organization: Organization;
  characterIcons: CharacterIcons;
};

export const ShowOrganization = (props: ShowOrganizationProps) => {
  const { organization, characterIcons } = props;
  if (!organization) {
    return <div></div>;
  } else {
    return (
      <>
        <div className={'search-result-organization'}>
          <div className={'search-result-attackers'}>
            <img className={'atk-icon'} src={atkIcon} alt={'attack'} />
            <img
              className={'search-result-chara-icon'}
              src={characterIcons.get(Number(organization.atk_id_1))}
              alt={'attack1'}
            />
            <img
              className={'search-result-chara-icon'}
              src={characterIcons.get(Number(organization.atk_id_2))}
              alt={'attack2'}
            />
            <img
              className={'search-result-chara-icon'}
              src={characterIcons.get(Number(organization.atk_id_3))}
              alt={'attack3'}
            />
            <img
              className={'search-result-chara-icon'}
              src={characterIcons.get(Number(organization.atk_id_4))}
              alt={'attack4'}
            />
            <img
              className={'search-result-chara-icon'}
              src={characterIcons.get(Number(organization.atk_id_5))}
              alt={'attack5'}
            />
          </div>
          <div className={'search-result-defender'}>
            <img className={'def-icon'} src={defIcon} alt={'defence'} />
            <img
              className={'search-result-chara-icon'}
              src={characterIcons.get(Number(organization.def_id_1))}
              alt={'defence1'}
            />
            <img
              className={'search-result-chara-icon'}
              src={characterIcons.get(Number(organization.def_id_2))}
              alt={'defence2'}
            />
            <img
              className={'search-result-chara-icon'}
              src={characterIcons.get(Number(organization.def_id_3))}
              alt={'defence3'}
            />
            <img
              className={'search-result-chara-icon'}
              src={characterIcons.get(Number(organization.def_id_4))}
              alt={'defence4'}
            />
            <img
              className={'search-result-chara-icon'}
              src={characterIcons.get(Number(organization.def_id_5))}
              alt={'defence5'}
            />
          </div>
          <div className="comment">
            <p>{organization.comment_data}</p>
          </div>
          <div className="post-data">
            <p className="post-time">{organization.update_datetime}</p>
            <input
              type="image"
              className={'heart-icon'}
              src={heartIcon}
              alt={'good'}
            ></input>
            <p className={'like-num'}>{organization.good}</p>
            <input
              type="image"
              className={'heart-icon'}
              src={heartBrakIcon}
              alt={'bad'}
            />
            <p className={'like-num'}>{organization.bad}</p>
          </div>
        </div>
      </>
    );
  }
};
