export default function GoogleMapSection() {
    return (
        <div className="google-map-section">
            <div className="map-canvas" style={{ height: '400px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#555', fontSize: '18px' }}>Google Map (API Key Required)</p>
            </div>
        </div>
    );
}
