import React from 'react';
import { render } from 'react-dom';
import { QRCode } from 'react-qr-svg';

const styles = {
    root: {
        fontFamily: 'sans-serif',
        marginTop: '2em', // Add space for the event title
        backgroundColor: '#040a31', // Background color
        color: 'white', // Text color
        padding: '1em', // Add padding for better spacing
    },
    h1: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    navBar: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '5em', // Add space for the navigation bar
        backgroundColor: '#233eff', // Navigation bar color
        color: 'white',
    },
    navOption: {
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    eventInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2em', // Add space above the QR code for event information
        padding: '0 1em', // Add padding for better spacing
    },
    dateAndTime: {
        textAlign: 'left',
    },
    location: {
        textAlign: 'right',
    },
    qrcode: {
        textAlign: 'center',
        marginTop: '1em', // Add margin above the QR code
    },
};

export default class App extends React.Component {
    componentDidMount() { }

    handleNavOptionClick(option) {
        // Handle navigation option click, you can navigate to different sections/pages here
        console.log(`Clicked on ${option}`);
    }

    render() {
        return (
            <div style={styles.root}>
                <h1 style={styles.h1}>D&D Night Hosted by imnotArt</h1>
                <div style={styles.navBar}>
                    <div style={styles.navOption} onClick={() => this.handleNavOptionClick('Option 1')}>
                        Register
                    </div>
                    <div style={styles.navOption} onClick={() => this.handleNavOptionClick('Option 2')}>
                        Ceptor Club
                    </div>
                    <div style={styles.navOption} onClick={() => this.handleNavOptionClick('Option 3')}>
                        Humancore
                    </div>
                    <div style={styles.navOption} onClick={() => this.handleNavOptionClick('Option 4')}>
                        PolygonID
                    </div>
                    <div style={styles.navOption} onClick={() => this.handleNavOptionClick('Option 5')}>
                        About
                    </div>
                </div>
                <div style={styles.eventInfo}>
                    <div style={styles.dateAndTime}>
                        {/* Add event date and time information here */}
                        Date: February 29, 2024<br />
                        Time: 6:00 PM
                    </div>
                    <div style={styles.location}>
                        {/* Add event location information here */}
                        Location: To Be Revealed
                    </div>
                </div>
                <div style={styles.qrcode}>
                    <QRCode
                        level="Q"
                        style={{ width: 256 }}
                        value={JSON.stringify({
                            id: 928328,
                            name: 'Jane Doe',
                            insider: true,
                        })}
                    />
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
