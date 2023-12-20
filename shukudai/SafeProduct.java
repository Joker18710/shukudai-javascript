package shukudai;

public class SafeProduct {
	public static void main(String[] args) {
	//インスタンス化
	Safe smallSafe = new Safe("小型金庫",10);
	KeySafe bigKeySafe = new KeySafe("大型鍵付き金庫",2);
	
    smallSafe.takeOrder(2);
    bigKeySafe.takeOrder(1);
	}
}
