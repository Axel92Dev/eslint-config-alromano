/* fake imports just for running eslint on a "real" React component */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { ViewHotel } from '../../view/hotel/ViewHotel';
import { ProductIcon } from '../itinerary/ProductIcon';

// should raise ERROR @typescript-eslint/no-unused-vars
const BooleanComponent: React.FC<{ enabled: boolean }> = ({ enabled }) => null;

export const Hotel: React.FC<{
  viewHotel: ViewHotel;
}> = ({ viewHotel }) => {
  const unused = viewHotel?.foo?.bar?.baz ?? 'hola'; // should raise ERROR @typescript-eslint/no-unused-vars

  return (
    <div className="hotel col-xs-12 product-row">
      <div className="name-and-address-with-icon col-xs-12 col-sm-8 row">
        <ProductIcon iconClass="icon-hotel" />
        <div className="name-and-address product-name col-xs-10">
          <div data-role="hotel-name">{viewHotel.name}</div>
          <div data-role="hotel-address" className="subtitle">
            {viewHotel.address}
          </div>
          <div className="subtitle">{viewHotel.stayInfo}</div>
        </div>
      </div>
      <div className="pnr col-xs-12 col-sm-4">
        <div data-role="hotel-confirmation-number-label">{viewHotel.pnrLabel}</div>
        <div data-role="hotel-confirmation-number" className="pnr-value">
          {viewHotel.pnr}
        </div>
        <BooleanComponent enabled={true} />
      </div>
    </div>
  );
};
