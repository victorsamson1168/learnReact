import React,{Component} from 'react';
import {Media, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText} from 'reactstrap';
class Menu extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            selecteDish:null
            
        }
    }
    onDishSelect(dish)
    {
        this.setState({selecteDish:dish});
    }
    
    renderDish(dish)
    {
        if(dish!=null)
        {
            return(
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                    <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );

        }
        else{
            return(
                <div></div>
            );
        }
    }
    render()
    {
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key ={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}> 
                            <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                        
                    <CardImgOverlay body className="ml-5">
                         <CardTitle heading>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selecteDish)}
                </div>
            </div>
            
        );
    }
}
export default Menu;