import React from 'react';
import styled from 'styled-components';
import Icon from '../../common/Icon';

const ListWrapper = styled.ul`
  list-style: none;
  padding: 24px 32px;
  flex: 1;
  height: 100%;
  overflow: scroll;
`

const ListItem = styled.li`
  padding: 12px 20px;
  background: ${props => props.isActive ? props.theme.primaryColor : props.theme.foregroundColor};
  border-radius: 4px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: ${props => props.theme.transitionTime};
  display: flex;
  align-items: center;

  &:hover {
    background: ${props => props.isActive ? props.theme.primaryColor.darken(0.1) : props.theme.foregroundColor.darken(0.1)};
  }
`

const ListTitle = styled.p`
  color: ${props => props.theme.textColor};
  font-size: 18px;
  margin: 0;
  flex: 1;
`

const DeleteIcon = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgba(0, 0, 0, .1);
  }
`
const EditIcon = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgba(0, 0, 0, .1);
  }
`

const List = ({
  list,
  onDeleteClick,
  onEditClick,
  onClick,
  activeItemId,
  ...otherProps
}) => {
  return (
    <ListWrapper>
      {
        list.map((item) => <ListItem isActive={activeItemId === item.id} key={item.id} onClick={() => onClick(item)} {...otherProps}>
          <ListTitle>{item.title}</ListTitle>

          <EditIcon onClick={(e) => {
            onEditClick({
              edit: true,
              editBook: {
                title: item.title,
                author: item.author,
                id: item.id
              }
            });
            e.stopPropagation();
          }}>
            <Icon name="edit" size="16px" color="white" />
          </EditIcon>
          <DeleteIcon onClick={(e) => {
            onDeleteClick(item);
            e.stopPropagation();
          }}>
            <Icon name="delete" size="16px" color="white" />
          </DeleteIcon>
        </ListItem>)
      }
    </ListWrapper>
  );
}

export default List;