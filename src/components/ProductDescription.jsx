import React from "react";

const ProductDescription = () => {
  return (
    <div className="max-padd-container mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn-dark rounded-sm !text-xs !py-[6px]">
          Description
        </button>
        <button className="btn-dark-outline rounded-sm !text-xs !py-[6px]">
          Care Guide
        </button>
        <button className="btn-dark-outline rounded-sm !text-xs !py-[6px]">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          tempore consectetur obcaecati expedita voluptate, odit, assumenda
          minus libero, debitis doloremque molestias? Perspiciatis, dolorem ea?
          Praesentium ea saepe tempora. Accusamus, cumque.
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            fugiat voluptate expedita veritatis omnis.
          </p>
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
