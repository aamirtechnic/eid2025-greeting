
body {
  font-family: 'Cairo', sans-serif;
  direction: rtl;
  text-align: center;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
}
h1 {
  margin-top: 20px;
  color: #333;
}
#template-selection {
  margin: 20px auto;
  max-width: 850px;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}
.template-option {
  width: 250px;
  border: 3px solid transparent;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s, border 0.3s;
}
.template-option:hover {
  transform: scale(1.05);
  border: 3px solid #3498db;
}
#editor {
  display: none;
  margin-bottom: 30px;
}
.template-container {
  position: relative;
  width: 800px;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
.template-container img {
  width: 100%;
  height: auto;
  display: block;
}
.draggable {
  position: absolute;
  cursor: move;
  user-select: none;
  transition: all 0.2s ease-in-out;
}
.draggable:hover {
  transform: scale(1.05);
}
.circular-image {
  border-radius: 50%;
  object-fit: cover;
}
.controls {
  margin: 20px auto;
  max-width: 800px;
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.controls label {
  margin-right: 5px;
  font-weight: bold;
}
.controls input[type="text"],
.controls select,
.controls input[type="file"] {
  padding: 5px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.controls input[type="range"],
.controls input[type="color"] {
  margin: 10px;
}
.controls button {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #3498db;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}
.controls button:hover {
  background: #2980b9;
}
