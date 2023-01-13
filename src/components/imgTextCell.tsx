/**
 * @description 图文Cell组件
 */
import React from 'react';
import './index.scss';

const classPrefix = 'qnc-img-text';
interface ImgTextCellData {
  /**
   * @description 标题
   **/
  title: string;
  /**
   * @description 文章作者
   **/
  source?: string;
  /**
   * @description 评论数
   **/
  commentNum?: number;
  /**
   * @description 发布时间 (格式 2021-05-19 19:46:53)
   **/
  time?: Date;
  /**
   * @description 右面的图片
   **/
  imgSrc?: string;
}

interface ImgTextCellProps {
  /**
   * @description 图文数据
   **/
  data: ImgTextCellData;
  /**
   * @description 组件内部默认做数据转化
   * @default true
   **/
  format?: boolean;
  /**
   * @description 是否展示底部的来源、评论数、发布时间
   * @default true
   **/
  showCellFooter?: boolean;
  /**
   * @description className
   **/
  className?: string;
  /**
   * @description 点击文章整个卡片触发
   **/
  onClick: (data) => void;
}

const ImgTextCell = ({
  data,
  onClick,
}: ImgTextCellProps) => {
  const { title, imgSrc, source, commentNum, time } = data;

  return (
    <div className={classPrefix} onClick={() => onClick(data)}>
      <div className={`${classPrefix}-info`}>
        <div className={`${classPrefix}-title`}>{title}</div>
      </div>
      {imgSrc && (
        <div>
          <div className={`${classPrefix}-image`}>
            <img src={imgSrc}  />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgTextCell;
