// 리액트에서는 import와 export가 많이 사용된다.
import React from 'react'; // 리액트 라이브러리 임포트

// 커스터머 클래스 정의
// 리액트의 컴포넌트 형태로 작성된 것
// 한 명의 고객에 대한 정보를 출력하는 클래스
class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
            </div>
        )
    }
}

// 고객에 대한 정보가 많아짐에 따라, 클래스의 정보를 구조화
// customer-profile과 customer-info로 구분

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer; // 커스터머 클래스 내보내기