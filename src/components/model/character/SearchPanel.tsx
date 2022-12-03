import atkIcon from '../../../images/atk.png';
import defIcon from '../../../images/def.png';
import heartIcon from '../../../images/heart.svg';
import heartBrakIcon from '../../../images/heartbreak.svg';
import noSelected from '../../../images/no_selected.png';
import searchIcon from '../../../images/search.svg';

type SearchPanelProps = {
  index: number;
  element: string;
};

export const SearchPanel = (props: SearchPanelProps) => {
  const { index, element } = props;
  return (
    <div id={'chara_search_tab' + index} className="chara-search-tab-panel">
      <div id={'selected_characters' + index}>
        <img className={'selected-chara-icon'} src={noSelected}></img>
        <img className={'selected-chara-icon'} src={noSelected}></img>
        <img className={'selected-chara-icon'} src={noSelected}></img>
        <img className={'selected-chara-icon'} src={noSelected}></img>
        <img className={'selected-chara-icon'} src={noSelected}></img>
        <input type="image" className={'search-icon'} src={searchIcon}></input>
      </div>

      <div className={'chara-search-rows'}>
        <div id={'search_result' + index} className={'result-search-group'}>
          <div>
            <img className={'atk-icon'} src={atkIcon}></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2019/08/3a572c4cfb0eeb77b314e19de84fde97-1.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/02/ec9aa3dd8bfdfbe37588aae58313e98c.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2019/08/1e2cc494f9b1c31acdce7ef3f8a89cd9-1.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/02/0cd9d03bc1a316c090e60d0f7e564550.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2019/08/8479f7b5d739f9951aa29415fe222bf7.png'
              }
            ></img>
          </div>
          <div>
            <img className={'def-icon'} src={defIcon}></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2020/03/bd6ab9a2fc55272194d263604d26c1cf.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/09/5a0ed716c7062036b825b98a14c527cd.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/02/7e24a526cad7c3f429f41d8623e08c4a.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/02/affa07ed31f5b3e50866b83ec56ec08f.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2019/08/1d615e05ca60333b4203ea4fd04ae654.png'
              }
            ></img>
          </div>
          <div className="like">
            <input
              type="image"
              className={'heart-icon'}
              src={heartIcon}
            ></input>
            <p className={'like-num'}>12</p>
            <input
              type="image"
              className={'heart-icon'}
              src={heartBrakIcon}
            ></input>
            <p className={'like-num'}>1</p>
          </div>
        </div>

        <div id={'search_result' + index} className={'result-search-group'}>
          <div>
            <img className={'atk-icon'} src={atkIcon}></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2019/08/3a572c4cfb0eeb77b314e19de84fde97-1.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/02/ec9aa3dd8bfdfbe37588aae58313e98c.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2019/08/1e2cc494f9b1c31acdce7ef3f8a89cd9-1.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/02/0cd9d03bc1a316c090e60d0f7e564550.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2019/08/8479f7b5d739f9951aa29415fe222bf7.png'
              }
            ></img>
          </div>
          <div>
            <img className={'def-icon'} src={defIcon}></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2020/03/bd6ab9a2fc55272194d263604d26c1cf.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/09/5a0ed716c7062036b825b98a14c527cd.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/02/7e24a526cad7c3f429f41d8623e08c4a.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/02/affa07ed31f5b3e50866b83ec56ec08f.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2019/08/1d615e05ca60333b4203ea4fd04ae654.png'
              }
            ></img>
          </div>
          <div className="like">
            <input
              type="image"
              className={'heart-icon'}
              src={heartIcon}
            ></input>
            <p className={'like-num'}>12</p>
            <input
              type="image"
              className={'heart-icon'}
              src={heartBrakIcon}
            ></input>
            <p className={'like-num'}>1</p>
          </div>
        </div>

        <div id={'search_result' + index} className={'result-search-group'}>
          <div>
            <img className={'atk-icon'} src={atkIcon}></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2019/08/3a572c4cfb0eeb77b314e19de84fde97-1.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/02/ec9aa3dd8bfdfbe37588aae58313e98c.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2019/08/1e2cc494f9b1c31acdce7ef3f8a89cd9-1.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/02/0cd9d03bc1a316c090e60d0f7e564550.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2019/08/8479f7b5d739f9951aa29415fe222bf7.png'
              }
            ></img>
          </div>
          <div>
            <img className={'def-icon'} src={defIcon}></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2020/03/bd6ab9a2fc55272194d263604d26c1cf.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/09/5a0ed716c7062036b825b98a14c527cd.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/02/7e24a526cad7c3f429f41d8623e08c4a.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2018/02/affa07ed31f5b3e50866b83ec56ec08f.png'
              }
            ></img>
            <img
              className={'result-search-chara-icon'}
              src={
                'https://appmedia.jp/wp-content/uploads/2019/08/1d615e05ca60333b4203ea4fd04ae654.png'
              }
            ></img>
          </div>
          <div className="like">
            <input
              type="image"
              className={'heart-icon'}
              src={heartIcon}
            ></input>
            <p className={'like-num'}>12</p>
            <input
              type="image"
              className={'heart-icon'}
              src={heartBrakIcon}
            ></input>
            <p className={'like-num'}>1</p>
          </div>
        </div>
      </div>
    </div>
  );
};
