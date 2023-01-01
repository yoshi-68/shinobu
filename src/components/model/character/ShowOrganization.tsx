import { CharacterIcons, SearchResultOrganizations } from '@/@types/types';
import atkIcon from '@/images/atk.png';
import defIcon from '@/images/def.png';
import heartIcon from '@/images/heart.svg';
import heartBrakIcon from '@/images/heartbreak.svg';

type ShowOrganizationProps = {
    organizations: Partial<SearchResultOrganizations> | undefined;
    characterIcons: CharacterIcons;
};

export const ShowOrganization = (props: ShowOrganizationProps) => {
    const { organizations, characterIcons } = props;
    if (!organizations) {
        return <div></div>;
    } else {
        return (
            <div>
                {organizations.result?.map((organization, index) => {
                    return (
                        <div key={'search_result_' + index} className={'result-search-group'}>
                            <div key={'organization_' + index}>
                                <div>
                                    <img className={'atk-icon'} src={atkIcon} />
                                    <img
                                        className={'result-search-chara-icon'}
                                        src={characterIcons.get(Number(organization.atk_id_1))}
                                    />
                                    <img
                                        className={'result-search-chara-icon'}
                                        src={characterIcons.get(Number(organization.atk_id_2))}
                                    />
                                    <img
                                        className={'result-search-chara-icon'}
                                        src={characterIcons.get(Number(organization.atk_id_3))}
                                    />
                                    <img
                                        className={'result-search-chara-icon'}
                                        src={characterIcons.get(Number(organization.atk_id_4))}
                                    />
                                    <img
                                        className={'result-search-chara-icon'}
                                        src={characterIcons.get(Number(organization.atk_id_5))}
                                    />
                                </div>
                                <div>
                                    <img className={'def-icon'} src={defIcon} />
                                    <img
                                        className={'result-search-chara-icon'}
                                        src={characterIcons.get(Number(organization.def_id_1))}
                                    />
                                    <img
                                        className={'result-search-chara-icon'}
                                        src={characterIcons.get(Number(organization.def_id_2))}
                                    />
                                    <img
                                        className={'result-search-chara-icon'}
                                        src={characterIcons.get(Number(organization.def_id_3))}
                                    />
                                    <img
                                        className={'result-search-chara-icon'}
                                        src={characterIcons.get(Number(organization.def_id_4))}
                                    />
                                    <img
                                        className={'result-search-chara-icon'}
                                        src={characterIcons.get(Number(organization.def_id_5))}
                                    />
                                </div>
                                <div className="comment-data">
                                    <p>{organization.comment_data}</p>
                                </div>
                                <div className="post-data">
                                    <p className="post-time">{organization.update_datetime}</p>
                                    <input type="image" className={'heart-icon'} src={heartIcon}></input>
                                    <p className={'like-num'}>{organization.good}</p>
                                    <input
                                        type="image"
                                        className={'heart-icon'}
                                        src={heartBrakIcon}
                                    />
                                    <p className={'like-num'}>{organization.bad}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
};
