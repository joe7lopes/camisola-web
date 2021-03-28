import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import BadgeList from './BadgeList';
import { IBadge, IRootState, ISettings } from '../../../../../types';
import { getBadges } from '../../../../../store/selectors';
import { saveSettings } from '../../../../../actions';

const Badges = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state: IRootState) => state.settings);
  const badgesInStore = useSelector(getBadges);
  const [badges, setBadges] = useState(badgesInStore);

  useEffect(() => {
    setBadges(badgesInStore);
  }, [badgesInStore]);

  const addNewBadge = () => {
    setBadges([...badges, { id: uuidv4(), name: 'Nome do badge' }]);
  };

  const handleBadgeChanged = (index: number, value: string) => {
    const copy = [...badges];
    copy[index].name = value;
    setBadges(copy);
  };

  const handleDeleteBadge = (badge: IBadge) => {
    setBadges(badges.filter((b) => b.id !== badge.id));
  };

  const saveBadges = () => {
    const newSettings:ISettings = {
      ...settings,
      productSettings: { ...settings.productSettings, badges },
    };
    dispatch(saveSettings(newSettings));
  };

  return (
        <div>
            <div className="c-flex">
                <h5>Badges</h5>
                <Button className="m-l-md" variant="primary" onClick={addNewBadge}>Novo</Button>
            </div>
            <div className="m-t-lg m-b-lg">
                <BadgeList
                    badges={badges}
                    onChange={handleBadgeChanged}
                    onDelete={handleDeleteBadge}
                />
            </div>
            {badges.length > 0
            && <Button
                variant="primary"
                onClick={saveBadges}>
                Salvar
            </Button>
            }
        </div>
  );
};

export default Badges;
